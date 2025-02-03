import { Button, Card, Text, TextField } from "@radix-ui/themes";

export default function NewPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(/signup.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-none text-center bg-gray-600">
      <Text className="my-3 text-2xl font-semibold">Nova senha</Text>
      
        <TextField.Root type="password" placeholder="Nova Senha" className="mb-4 w-full">
        </TextField.Root>
        <Button className="w-40 mb-3 bg-slate-500" /* onClick={handleSignUp} */>
        <a href="/dashboard" className="hover:underline">
           Cadastrar
          </a> 
        </Button>
      </Card>
    </div>
  );
}
