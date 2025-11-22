"use client";

import { useState } from "react";

import { Button } from "./button";
import { ParticipationModal } from "./participation-modal";

export function ParticipationTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button className="mx-auto md:max-w-[360px] lg:mx-0" onClick={() => setIsModalOpen(true)}>
        Clique e participe
      </Button>

      <ParticipationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
