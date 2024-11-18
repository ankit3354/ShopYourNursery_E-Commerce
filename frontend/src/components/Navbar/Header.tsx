import { RiSearch2Line } from "react-icons/ri";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { usePreOrder } from "../../hooks/usePreOrder";
import { useState } from "react";
import Badge from "./Badge";

export default function Header() {
  const { cart } = useCart();
  const { preOrderCart } = usePreOrder();
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const productCountInCart = cart.length + preOrderCart.length;

  return (
    <div className="min-h-[6rem] border-b border-b-[#BDE3A6] px-8 flex items-center flex-wrap gap-x-8 flex-col gap-y-4 md:flex-row  xl:justify-between font-Poppins py-4 xl:py-0 justify-center w-full max-w-[1600px]">
      <NavLink to="/" className="text-xl font-bold  xl:hidden">
        ShopYourNursery
      </NavLink>
      <ul className="flex list-none  gap-x-8 flex-wrap justify-center items-center gap-y-2 font-medium border-none border-black">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive && "text-[#7AA262] font-semibold text-lg"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop-plants"
            className={({ isActive }) =>
              `${isActive && "text-[#7AA262] font-semibold text-lg"}`
            }
          >
            Shop Plants
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plant-care"
            className={({ isActive }) =>
              `${isActive && "text-[#7AA262] font-semibold text-lg"}`
            }
          >
            Plant Care
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${isActive && "text-[#7AA262] font-semibold text-lg"}`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `${isActive && "text-[#7AA262] font-semibold text-lg"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `${isActive && "text-[#7AA262] font-semibold text-lg"}`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/"
        className="text-xl font-bold hidden xl:block border-none border-black"
      >
        ShopYourNursery
      </NavLink>
      <div className="border-none border-black flex justify-center items-center gap-x-10 flex-wrap gap-y-2">
        <div className="flex items-center justify-center bg-[#E8E8E8] px-5 py-2 rounded-3xl gap-x-2">
          <input
            className="placeholder:text-[#A6A6A6] bg-transparent focus:outline-none w-full"
            placeholder="Quick Search"
          />
          <div className="flex items-center justify-center text-xl">
            <RiSearch2Line />
          </div>
        </div>
        <div className="items-center justify-between gap-x-3 hidden sm:flex">
          <div onClick={() => setShowLoginForm((prev) => !prev)}>
            <NavLink to="/account" className={``}>
              {({ isActive }) =>
                isActive ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />
              }
            </NavLink>

            {showLoginForm && (
              <div className="Login-SignUp-Form top-[76px] right-[36px] absolute  flex flex-col items-center justify-center shadow-xl ring-1 ring-gray-900/5 shrink-0 shadow-custom rounded bg-[#fff] font-['Poppins'] w-[245px] h-[128px] gap-[10px]">
                <div
                  onClick={() => navigate("/login")}
                  className="flex items-center bg-[#BDE3A6] rounded-[10px] justify-center gap-[10px] py-[8px] px-[46px] w-[202px] h-[32px]"
                >
                  <span className="text-[16px] font-medium leading-normal text-[#434343] cursor-pointer">
                    Log In
                  </span>
                </div>
                <div className="flex gap-[12px]">
                  <h2 className="text-[12px] text-[#474747] font-sans font-normal leading-6">
                    Don’t have account?
                  </h2>
                  <h2
                    onClick={() => navigate("/signup")}
                    className="text-[12px] text-[#62864C] font-normal leading-6 underline decoration-solid decoration-auto underline-offset-auto cursor-pointer"
                  >
                    Create Here
                  </h2>
                </div>

                <div className="text-[10px] text-[#757575] font-normal leading-6 font-sans">
                  Login/Signup to view your Account
                </div>
              </div>
            )}
          </div>
          <div>
            <NavLink to="/favorite" className={``}>
              {({ isActive }) =>
                isActive ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
              }
            </NavLink>
          </div>
          <div>
            <NavLink to="/cart" className={`relative`}>
              {({ isActive }) =>
                isActive ? (
                  <>
                    <ShoppingCartIcon />
                    <Badge count={productCountInCart} />
                  </>
                ) : (
                  <>
                    {" "}
                    <ShoppingCartOutlinedIcon />
                    <Badge count={productCountInCart} />
                  </>
                )
              }
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
