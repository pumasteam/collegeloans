import React from "react";
import { Formik, Field, Form } from "formik";
import { PersistFormikValues } from "formik-persist-values";

export default function FormUI(props) {
  return (
    <div className="w-full h-full">
      <h1 class="text-3xl m-6 font-extrabold text-black dark:text-white sm:text-4xl text-center">
        Search for your college
      </h1>
      <Formik
        onSubmit={(values) => console.log(values)}
        initialValues={{
          rsat: "",
          wsat: "",
          msat: "",
          state: "",
          anualIncome: "",
        }}
      >
        {(props) => (
          <Form className="flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-between">
              <Field
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="wsat"
                placeholder="Your writing SAT score"
              />
              <Field
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="rsat"
                placeholder="Your reading SAT score"
              />
              <Field
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="msat"
                placeholder="Your math SAT score"
              />
              <Field
                component="select"
                name="state"
                placeholder="Your state"
                className="block text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 m-1 w-96"
              >
                <option value="NY">NY</option>
                <option value="MA">MA</option>
                <option value="CA">CA</option>
                <option value="IL">IL</option>
              </Field>
              <Field
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="anualIncome"
                type="number"
                placeholder="Your anual income"
              />
            </div>
            <button
              type="submit"
              className="max-w-xs m-6 py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg"
            >
              Submit
            </button>
            <PersistFormikValues name="college" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
