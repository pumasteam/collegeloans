import React from "react";
import { Formik, Field, Form } from "formik";
import { PersistFormikValues } from "formik-persist-values";
import { Link } from "react-router-dom";

export default function FormUI(props) {
  return (
    <div className="w-full h-full">
      <h1 className="text-3xl m-6 font-extrabold text-black dark:text-white sm:text-4xl text-center">
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
          <Form action="/colleges" className="flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-between">
              <Field
                type="number"
                min="100"
                max="400"
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="wsat"
                required
                placeholder="Your writing SAT score"
              />
              <Field
                type="number"
                min="100"
                max="400"
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="rsat"
                required
                placeholder="Your reading SAT score"
              />
              <Field
                type="number"
                min="200"
                max="800"
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="msat"
                required
                placeholder="Your math SAT score"
              />
              <Field
                component="select"
                name="state"
                required
                placeholder="Your state"
                className="block text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 m-1 w-96"
              >
                <option value="newyork">New York</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="california">California</option>
                <option value="illinois">Illinois</option>
              </Field>
              <Field
                className="m-1 max-w-sm rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="anualIncome"
                type="number"
                required
                min="1"
                placeholder="Your annual income"
              />
            </div>
            <button
              type="submit"
              className="max-w-xs m-6 py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-pointer rounded-lg"
            >
              <Link className="min-w-xs" to={`/colleges/${props.values.msat + props.values.wsat + props.values.rsat}?sat_reading=${props.values.rsat}&sat_writing=${props.values.wsat}&sat_math=${props.values.msat}&region=${props.values.state}&annual_income=${props.values.anualIncome}`}>submit</Link>
            </button>
            <PersistFormikValues name="college" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
