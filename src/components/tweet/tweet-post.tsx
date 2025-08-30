"use client";

import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";

const TweetPost = () => {
  const handleImageUpload = () => {};
  const handlePostClick = () => {};

  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
      <div>
        <img
          src={user.avatar}
          alt={user.name}
          className="size-12 rounded-full"
        />
      </div>
      {/* 
        className explicação:
        - flex-1: faz o elemento crescer para ocupar o espaço restante do flex container
        - min-w-0: impede que o elemento ultrapasse o tamanho do container pai, permitindo que o overflow funcione corretamente
        - max-w-full: limita a largura máxima ao tamanho total disponível
      */}
      <div className="flex-1 min-w-0 max-w-full">
        {/* 
        className explicação:
        - min-h-14: altura mínima para garantir espaço inicial
        - w-full max-w-full: ocupa toda largura disponível
        - whitespace-pre-wrap: mantém quebras de linha e espaços
        - overflow-x-hidden: esconde rolagem horizontal
        - break-all [overflow-wrap:anywhere]: quebra palavras longas para não estourar o layout
        - outline-none: remove borda de foco padrão
        - text-lg text-white: texto grande e branco
        - empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]: mostra placeholder cinza quando vazio
      */}
        <div
          className="min-h-14 w-full max-w-full whitespace-pre-wrap overflow-x-hidden break-all [overflow-wrap:anywhere] outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div>
        <div className="flex justify-between item-center mt-2">
          <div
            onClick={handleImageUpload}
            className="cursor-pointer"
          >
            <FontAwesomeIcon icon={faImage} size="2x" />
          </div>
          <div className="w-28">
            <Button
              label="Postar"
              size={2}
              onClick={handlePostClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPost;
