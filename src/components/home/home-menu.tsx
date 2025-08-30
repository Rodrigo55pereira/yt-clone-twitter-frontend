import {
  faHouse,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "../nav/nav-item";
import NavLogout from "../nav/nav-logout";
import { Logo } from "../ui/logo";
import { SearchInput } from "../ui/search-input";

type HomeMenuProps = {
  closeAction: () => void;
};

const HomeMenu = ({ closeAction }: HomeMenuProps) => {
  return (
    <div className="lg:hidden fixed inset-0 p-6 bg-black">
      <div className="flex justify-between items-center">
        <Logo size={32} />
        <div
          onClick={closeAction}
          className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="size-6"
          />
        </div>
      </div>
      <div className="my-6">
        <SearchInput />
      </div>
      <div>
        <NavItem
          href="/home"
          icon={faHouse}
          label="Página inicial"
        />
        <NavItem
          href="/profile"
          icon={faUser}
          label="Meu perfil"
        />
        <NavLogout />
      </div>
    </div>
  );
};

export default HomeMenu;
