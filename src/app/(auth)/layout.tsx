import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const isProd = process.env.NODE_ENV === "production";
const NEXT_PUBLIC_LOGIN = process.env.NEXT_PUBLIC_LOGIN || "";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const headerList = await headers();
  const currentUrl = headerList.get("x-current-url") || "/";
  console.log("x-current-url", currentUrl);
  const { data } = await supabase.auth.getSession();
  // redirect to login
  // when is production redirect to NEXT_PUBLIC_LOGIN
  // when is development redirect to /dev-login
  if (!data.session && isProd) {
    return redirect(
      `${NEXT_PUBLIC_LOGIN}?next=${encodeURIComponent(currentUrl)}`
    );
  }
  if (!data.session && !isProd) {
    return redirect(`/dev-login?next=${encodeURIComponent(currentUrl)}`);
  }

  return <>{children}</>;
}
