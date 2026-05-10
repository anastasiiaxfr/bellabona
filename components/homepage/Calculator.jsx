"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Info, UsersRound, Calendar } from "lucide-react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const marksEmployees = {
  0: "0",
  50: "50",
  100: "100",
  150: "150 Employees",
  200: "200",
  250: "250",
};

const subsidyMarks = {
  3: "3 €",
  4: "4 €",
  5: "5 €",
  6: "6 €  Subsidy",
  7: "7 €",
  8: "8 €",
  9: "9 €",
  10: "10 €",
};

function Calculator() {
  const [employees, setEmployees] = useState(100);
  const [subsidy, setSubsidy] = useState(4);
  const [days, setDays] = useState(5);

  const weeksPerMonth = 4.33;

  const monthlyCostMin = employees * days * (subsidy - 0.5) * weeksPerMonth;

  const monthlyCostMax = employees * days * (subsidy + 0.5) * weeksPerMonth;

  return (
    <section className="section section-calculator bg-cstm-secondary my-0! py-10 md:py-20">
      <div className="container">
        <div className="bg-white rounded-xl p-4 sm:p-10">
          <h2 className="text-center">
            Let’s Run Some Numbers and Make Lunch Work for You
          </h2>

          <div className="my-8">
            <div>
              <p className="grid grid-cols-[30px_1fr] gap-4 text-2xl">
                <Calendar size={30} />
                How many days per week do you want to offer lunch?
              </p>
            </div>

            <div className="my-6">
              <RadioGroup
                value={String(days)}
                onValueChange={(v) => setDays(Number(v))}
                className="grid grid-cols-3 md:grid-cols-5 picker-days"
              >
                <FieldLabel htmlFor="1day-plan">
                  <Field orientation="horizontal">
                    <FieldContent className="text-center">
                      <FieldTitle>1</FieldTitle>
                      <FieldDescription>Day</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="1" id="1day-plan" />
                  </Field>
                </FieldLabel>

                <FieldLabel htmlFor="2day-plan">
                  <Field orientation="horizontal">
                    <FieldContent className="text-center">
                      <FieldTitle>2</FieldTitle>
                      <FieldDescription>Days</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="2" id="2day-plan" />
                  </Field>
                </FieldLabel>

                <FieldLabel htmlFor="3day-plan">
                  <Field orientation="horizontal">
                    <FieldContent className="text-center">
                      <FieldTitle>3</FieldTitle>
                      <FieldDescription>Days</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="3" id="3day-plan" />
                  </Field>
                </FieldLabel>

                <FieldLabel htmlFor="4day-plan">
                  <Field orientation="horizontal">
                    <FieldContent className="text-center">
                      <FieldTitle>4</FieldTitle>
                      <FieldDescription>Days</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="4" id="4day-plan" />
                  </Field>
                </FieldLabel>

                <FieldLabel htmlFor="5day-plan">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>5</FieldTitle>
                      <FieldDescription>Days</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="5" id="5day-plan" />
                  </Field>
                </FieldLabel>
              </RadioGroup>
            </div>
          </div>

          <div className="my-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10">
            <div className="flex gap-3 text-2xl">
              <UsersRound size={30} />
              How many employees?
            </div>

            <Slider
              min={0}
              max={250}
              step={10}
              marks={marksEmployees}
              value={employees}
              onChange={(v) => setEmployees(v)}
            />
          </div>

          <div className="my-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10">
            <div className="flex gap-3 text-2xl">
              <UsersRound size={30} />
              Company meal subsidy
            </div>

            <Slider
              min={3}
              max={10}
              step={1}
              marks={subsidyMarks}
              value={subsidy}
              onChange={(v) => setSubsidy(v)}
            />
          </div>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="p-4 md:p-8 rounded-xl bg-cstm-green-1 text-cstm-green-3 text-center">
              <p>What your employees pay per meal</p>
              <p className="text-4xl font-medium my-4">
                3.50 € - 5.50 € / dish
              </p>
              <p className="text-sm">Per employee per dish</p>

              <div className="flex gap-4 bg-cstm-grey-1 text-black text-left rounded-md p-4 mt-8">
                <Info />
                <p>
                  Employees top up their virtual wallet with all common payment
                  methods.
                </p>
              </div>
            </article>

            <article className="p-4 md:p-8 rounded-xl bg-cstm-secondary text-cstm-green-1 text-center">
              <p>What your company pays per month</p>

              <p className="text-4xl font-medium my-4">
                {Math.round(monthlyCostMin)} € - {Math.round(monthlyCostMax)} €
                / mo
              </p>

              <p className="text-sm">Per employee per dish</p>

              <div className="flex gap-4 bg-cstm-grey-1 text-black text-left rounded-md p-4 mt-8">
                <Info />
                <p>
                  You only pay what your team orders. A small service fee
                  applies.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8">
            <form className="mt-4 grid gap-4 items-center" method="GET">
              <div>
                <Field>
                  <FieldLabel htmlFor="email">
                    Enter your email for a custom breakdown and expert advice on
                    saving more.*
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
                  />
                </Field>
              </div>

              <div className="mt-10 mx-auto">
                <Button
                  type="submit"
                  className="btn-main bg-cstm-green-4 md:w-auto hover:text-white hover:bg-cstm-green-1"
                >
                  Get Custom Quote
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
