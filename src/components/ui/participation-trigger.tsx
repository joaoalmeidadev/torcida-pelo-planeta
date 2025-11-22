"use client";

import { useState } from "react";

import { Button } from "./button";
import { ParticipationModal } from "./participation-modal";

export function ParticipationTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button className="max-w-[360px]" onClick={() => setIsModalOpen(true)}>
        Clique e participe
      </Button>

      <ParticipationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
