import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { offer } from "@/config/offer";
import { CheckoutButton } from "@/components/course/checkout-button";

const NOTICE = "Inscrições em preparação";

describe("Checkout button", () => {
  it("links straight to the official Hotmart checkout", () => {
    render(<CheckoutButton />);

    const link = screen.getByRole("link", { name: /Quero aprender escova modelada/i });
    expect(link).toHaveAttribute("href", "https://pay.hotmart.com/N105599202D");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(screen.queryByText(NOTICE)).not.toBeInTheDocument();
  });

  it("falls back to a non-payment notice when the configured link is not official", async () => {
    vi.resetModules();
    vi.doMock("@/config/offer", () => ({
      offer: { ...offer, checkoutUrl: "[INSERIR LINK OFICIAL DA HOTMART]" },
    }));

    const { CheckoutButton: GuardedButton } = await import("@/components/course/checkout-button");
    render(<GuardedButton />);

    const trigger = screen.getByRole("button", { name: /Quero aprender escova modelada/i });
    expect(screen.queryByRole("link", { name: /Quero aprender escova modelada/i })).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByText(NOTICE)).toBeInTheDocument();
    vi.doUnmock("@/config/offer");
  });
});
