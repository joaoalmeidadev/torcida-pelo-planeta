import { Button } from "@/components/ui/button";

interface SuccessViewProps {
  onClose: () => void;
}

export function SuccessView({ onClose }: SuccessViewProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
      <h2 className="font-CCGibbonsGazette text-brand-green text-3xl leading-tight font-black uppercase md:text-5xl">
        Envio realizado
        <br />
        com sucesso!
      </h2>
      <p className="text-brand-green max-w-md text-lg">
        Não esqueça que para participar da promoção você deverá ter doado uma muda de planta.
      </p>
      <Button
        onClick={onClose}
        className="bg-brand-yellow-light hover:bg-brand-yellow-light/90 text-brand-green mt-8 w-full max-w-xs rounded-lg px-12 py-6 text-lg font-black uppercase"
      >
        Finalizar
      </Button>
    </div>
  );
}
