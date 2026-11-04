import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { offer } from "@/config/offer";

export function CheckoutButton() {
  const [open, setOpen] = useState(false);
  const validCheckout = /^https:\/\/(?:[a-z0-9-]+\.)*hotmart\.com(?:\/|$)/i.test(offer.checkoutUrl);
  if (validCheckout) {
    return <Button variant="course" asChild><a href={offer.checkoutUrl} rel="noopener noreferrer">Quero aprender escova modelada<ArrowUpRight /></a></Button>;
  }
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild><Button variant="course">Quero aprender escova modelada<ArrowUpRight /></Button></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="checkout-overlay" />
      <Dialog.Content className="checkout-dialog">
        <Dialog.Title className="font-editorial text-3xl">Inscrições em preparação</Dialog.Title>
        <Dialog.Description className="mt-4 text-muted-foreground">O link oficial de compra ainda não foi informado. Nenhum pagamento será solicitado nesta página.</Dialog.Description>
        <p className="pending-field mt-5">{offer.checkoutUrl}</p>
        <Dialog.Close asChild><Button variant="control" className="dialog-close" aria-label="Fechar aviso"><X /></Button></Dialog.Close>
        <Dialog.Close asChild><Button variant="course" className="mt-6">Voltar à página</Button></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}