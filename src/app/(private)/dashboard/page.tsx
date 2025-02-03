import { Button, Card, Text } from "@radix-ui/themes";

export default function Dashboard ({ /* user = "Usuário" */ }) {
/*  const handleLogout = () => {
    console.log("Logout realizado"); 
  }; */

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(/dashboard.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-none text-center">
        <Text className="text-white text-2xl font-semibold mb-2">
          Bem-vindo, Saipher {/* {user} */}!
        </Text>
        <Button className="w-40 my-3 bg-slate-500" /* onClick={handleSignUp} */>
          <a href="/signin" className="hover:underline">
           Sair
          </a> 
        </Button>
      </Card>
    </div>
  );
}
