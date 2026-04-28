import { PrivateLoginPage } from "@/components/private-portal/private-login-page";

export const dynamic = "force-dynamic";

type LoginPageProps = {
  searchParams: Promise<{
    next?: string;
    status?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return <PrivateLoginPage nextPath={params.next} status={params.status} />;
}
