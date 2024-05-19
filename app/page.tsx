import ButtonHandler from "@/components/auth/ButtonHandler";
import { Button } from "@/components/ui/button";
import { font } from "@/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center
     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 " >
      <div className="space-y-6 text-center ">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className, )}>
          🔏 Auth
        </h1>
        <p className="text-white text-lg ">Next auth boiler plate for your every project</p>
        <ButtonHandler link="/login" >
          <Button variant="secondary" size="lg" >Sign In</Button>
        </ButtonHandler>
      </div>
    </main>
  );
}
