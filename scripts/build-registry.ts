import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROJECT_ROOT = path.resolve(__dirname, '..')
const REGISTRY_PATH = path.join(PROJECT_ROOT, 'registry')
const PUBLIC_REGISTRY_PATH = path.join(PROJECT_ROOT, 'public/registry')
const COMPONENTS_JSON_PATH = path.join(REGISTRY_PATH, 'components.json')

// Helper to read JSON
async function readJson(filePath: string) {
  const content = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(content)
}

// Helper to write JSON
async function writeJson(filePath: string, data: any) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

async function main() {
  console.log('🏗️  Building registry...')

  try {
    // 1. Read registry definition
    const componentsDef = await readJson(COMPONENTS_JSON_PATH)
    // const style = 'new-york'; // No longer used for folder structure

    // 2. Prepare output directories
    console.log('🧹 Cleaning up old registry...')
    try {
      await fs.rm(PUBLIC_REGISTRY_PATH, { recursive: true, force: true })
    } catch (err) {
      // Ignore if directory doesn't exist
    }

    // Flattened structure: everything goes directly into public/r
    await fs.mkdir(PUBLIC_REGISTRY_PATH, { recursive: true })

    const indexData: any[] = []

    // 3. Process each component
    for (const [key, component] of Object.entries(componentsDef) as [
      string,
      any,
    ][]) {
      console.log(`Processing ${key}...`)

      const processedFiles = await Promise.all(
        component.files.map(async (file: any) => {
          const filePath = path.join(PROJECT_ROOT, file.content)
          try {
            const content = await fs.readFile(filePath, 'utf-8')
            return {
              name: file.name,
              content: content,
            }
          } catch (err) {
            console.error(
              `❌ Error reading file ${filePath} for component ${key}`
            )
            throw err
          }
        })
      )

      const componentData = {
        ...component,
        files: processedFiles,
      }

      // Write individual component JSON directly to public/r
      await writeJson(
        path.join(PUBLIC_REGISTRY_PATH, `${key}.json`),
        componentData
      )

      // Add to index (lightweight version)
      indexData.push({
        name: component.name,
        description: component.description,
        dependencies: component.dependencies,
        registryDependencies: component.registryDependencies,
        type: component.type,
        files: component.files.map((f: any) => f.name), // Just file names in index
      })
    }

    // 4. Write index files
    // Write index.json directly to public/r
    await writeJson(path.join(PUBLIC_REGISTRY_PATH, 'index.json'), indexData)

    console.log('✅ Registry built successfully in public/r!')
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

main()
