"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { BACKEND_URL } from "@/constants/environments";

import { Container, Header } from "@/components/layout";
import { Button, Input, PartnersLogos } from "@/components/ui";

import { Donation, DonationsTable } from "./donations-table";

export default function MinhasDoacoes() {
  const [email, setEmail] = useState("");
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${BACKEND_URL}/registro-de-muda/busca-por-email?email=${email}`
      );

      if (response.ok) {
        const data = await response.json();
        setDonations(data.data || []);
        setHasSearched(true);
      } else {
        console.error("Failed to fetch donations");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setHasSearched(false);
    setDonations([]);
    setEmail("");
  };

  return (
    <>
      {!hasSearched ? (
        <div className="bg-brand-green relative h-full min-h-screen w-full bg-[url('/background.avif')] bg-cover bg-center">
          <Container className="mt-16 flex flex-col items-center justify-center gap-16 pb-10">
            <Link href="/">
              <Image
                src="/logotipo-large.png"
                alt="Torcida pelo Planeta"
                width={278}
                height={108}
                className="object-contain"
                priority
              />
            </Link>

            <form onSubmit={handleSearch} className="flex w-full max-w-[480px] flex-col gap-6">
              <div className="space-y-2">
                <label className="text-brand-yellow-light text-lg font-bold">
                  Insira o seu e-mail
                </label>
                <Input
                  variant="form"
                  placeholder="Insira seu e-mail..."
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? "Buscando..." : "Acessar"}
              </Button>
            </form>

            <PartnersLogos height={84} width={270} />
          </Container>
        </div>
      ) : (
        <>
          <Header variant="search-results" onBackClick={handleBack} />
          <div className="bg-brand-green relative h-full min-h-screen w-full bg-[url('/background.avif')] bg-cover bg-center">
            <div className="flex h-full min-h-screen w-full items-center justify-center bg-black/1 backdrop-blur-md">
              <DonationsTable donations={donations} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
