import React from "react";
import { useCheckout } from "../../contexts/CheckoutContext";

const CheckoutForm = () => {
  const { userData, setUserData } = useCheckout();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData((prevInput) => ({
      ...prevInput,
      [name]: value,
      orderStatus: "Exitoso",
    }));
  };

  const formHandler = (event) => {
    event.preventDefault();
  };

  const isFormField = userData.orderStatus == "Exitoso";

  return (
    <form
      className="order-last mx-auto w-full py-16 md:order-first md:w-1/2 md:pr-10 lg:w-4/12"
      onSubmit={() => formHandler(event)}
    >
      <div>
        <section>
          <h1 className="text-lg font-medium text-gray-900">
            <b>Información del Contacto</b>
          </h1>
        </section>
        <section className="mt-10">
          <h2 className="text-lg font-medium text-gray-900">Detalles del Pago</h2>
          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            <div className="col-span-4 mt-6">
              <label
                htmlFor="name"
                className="text-sm font-normal text-gray-700"
              >
                Nombre
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="cc-name"
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="cardNumber"
                className="text-sm font-medium text-gray-700"
              >
                Numero de Tarjeta
              </label>
              <div>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  autoComplete="cc-number"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                />
              </div>
            </div>
            <div className="col-span-3">
              <label
                htmlFor="expirationDate"
                className="text-sm font-medium text-gray-700"
              >
                Fecha de Expiración (MM/YY)
              </label>
              <div>
                <input
                  type="text"
                  name="expirationDate"
                  id="expiration-date"
                  autoComplete="cc-exp"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <div>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  autoComplete="csc"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-lg font-medium text-gray-900">
          Dirección de envío y facturación
          </h2>
          <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6">
            <div className="col-span-3">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700"
              >
                Dirrección 
              </label>
              <div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                />
              </div>
            </div>
            <div className="col-span-3">
              <label
                htmlFor="apartment"
                className="text-sm font-medium text-gray-700"
              >
                Apartamento, casa, etc
              </label>
              <div>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                Ciudad
              </label>
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <label
                htmlFor="region"
                className="text-sm font-medium text-gray-700"
              >
                Provincia
              </label>
              <div className="col-span-3 md:col-span-1">
                <input
                  type="text"
                  id="region"
                  name="region"
                  autoComplete="address-level1"
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <label
                htmlFor="postalCode"
                className="text-sm font-medium text-gray-700"
              >
                Zip
              </label>
              <div>
                <input
                  type="text"
                  id="postal-code"
                  name="postalCode"
                  autoComplete="postal-code"
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                  onChange={() => {
                    inputChangeHandler(event);
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="mt-10 flex items-center justify-between gap-6  border-t pt-6">
          <p className="text-sm text-gray-500">
            No se le cobrará hasta el siguiente paso.
          </p>
          <a
            type="submit"
            href={isFormField ? "/confirmation" : undefined}
            className={`${!isFormField ? "cursor-not-allowed bg-gray-400 hover:bg-gray-300" : "bg-sky-600 hover:bg-sky-500"} px-6 py-3 text-center text-sm font-medium text-white`}
            onClick={() => {
              localStorage.setItem("userData", JSON.stringify(userData));
            }}
          >
            Continuar
          </a>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
