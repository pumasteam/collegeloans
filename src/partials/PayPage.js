import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function PayPage() {
  const { user } = useAuth0();
  const [colleges, setColleges] = useState(null);
  const { collegeId, debt, quotes } = useParams();
  const data = [{ name: "Oct", uv: 1843, pv: 2400, amt: 2400 },{ name: "Sep", uv: 1982, pv: 2400, amt: 2400 }, { name: "Dec", uv: 2002, pv: 2400, amt: 2400 }];
  useEffect(() => {
    getData();
    async function getData() {
      const url1 = `https://api.collegeai.com/v1/api/college/info?api_key=zPrUOEVtV86G&college_ids=${collegeId}&info_ids=name%2CmajorGraduates%2CentryProb%2CappliedDist%2CacceptedDist%2CclassSizeRangeOver100%2CclassSizeRange2To9%2CclassSizeRange10To19%2CclassSizeRange20To29%2CclassSizeRange30To39%2CclassSizeRange40To49%2CclassSizeRange50To99%2CnumberOfFullTimeFaculty%2CnumberOfPartTimeFaculty%2CtotalEnrolled%2CacceptanceRate%2CstudentsSubmittingACT%2CstudentsSubmittingSAT%2CtotalApplicants%2CmenApplicants%2CwomenApplicants%2CtotalAdmitted%2CmenAdmitted%2CwomenAdmitted%2CtotalEnrolled%2CmenEnrolled%2CwomenEnrolled%2ChsGPARequirement%2ChsRankRequirement%2CsecondarySchoolRecordRequirement%2CTOEFLRequirement%2CcompletionOfCollegePreparatoryProgram%2Crecommendations%2CformalDemonstrationOfCompetencies%2CadmissionTestScores%2CotherTest%2CsatMathPercentile25%2CsatMathPercentile75%2CsatReadingPercentile25%2CsatReadingPercentile75%2CactCumulativePercentile25%2CactCumulativePercentile75%2CactMathPercentile25%2CactMathPercentile75%2CactEnglishPercentile25%2CactEnglishPercentile75%2CactSciencePercentile25%2CactSciencePercentile75%2CactWritingPercentile25%2CactWritingPercentile75%2CfederalLoanRate%2CloanPrincipal%2CpercentStudentsReceivingFederalGrantAid%2CavgCostOfAttendance%2CaverageNetCost%2CavgNetPrice%2CinStateTuition%2CoutOfStateTuition%2CanyAlternativeTuitionPlansOfferedByInstitution%2CtuitionGuaranteePlan%2CprepaidTuitionPlan%2CtuitionPaymentPlan%2CotherAlternativeTuitionPlan%2CpercentOfStudentsWhoReceiveFinancialAid%2CstudentShareByIncomeLevel0To30000%2CstudentShareByIncomeLevel30001To48000%2CstudentShareByIncomeLevel480001To75000%2CstudentShareByIncomeLevel75001To110000%2CstudentShareByIncomeLevel110001Plus%2CnetPriceByIncomeLevel%2CnetPriceByIncomeLevel0To3000%2CnetPriceByIncomeLevel30001To48000%2CnetPriceByIncomeLevel48001To75000%2CnetPriceByIncomeLevel75001To110000%2CnetPriceByIncomeLevel110001Plus%2CpercentMale%2CpercentFemale%2CundergraduateSize%2CdemographicsMen%2CdemographicsWomen%2CdemographicsWhite%2CdemographicsBlack%2CdemographicsHisp%2CdemographicsAsian%2CdemographicsAian%2CdemographicsNhpi%2Cdemographics2mor%2CdemographicsNra%2CdemographicsUnkn%2CdemographicsAvgFamilyIncome%2CdemographicsMedianFamilyIncome%2CdemographicsMedianHouseholdIncome%2CpercentFirstGeneration%2CaverageAgeOfEntry%2ConCampusHousingAvailable%2CfreshmenRequiredToLiveOnCampus%2CsororitiesPercentParticipation%2CfraternitiesPercentParticipation%2CrotcOffered%2CrotcArmyOffered%2CrotcNavyOffered%2CrotcAirforceOffered%2Ccity%2CstateAbbr%2CstateName%2Czipcode%2Caddr%2ClocationLat%2ClocationLong%2Caliases%2Ccolors%2CisPrivate%2ClocaleClass%2ClocaleSize%2CstudentFacultyRatio%2CtypeYear%2Cregion%2CmenOnly%2CwomenOnly%2CcalendarSystem%2CreligiousAffiliation%2CprimaryFaith%2CstudentFacultyRatio%2CshortDescription%2ClongDescription%2CdescriptionCitation%2CfinancialAidWebsite%2CadmissionsWebsite%2CapplicationWebsite%2Cwebsite%2CnetPriceWebsite%2CvetMilitaryServiceWebsite%2CstudentRightToKnowAthleteWebsite%2CcampusImage%2CrankingsBestColleges%2CrankingsBestValueColleges%2CrankingsBestCollegeAcademics%2CrankingsTopPrivate%2CrankingsMostDiverseColleges%2CrankingsBestCollegeCampuses%2CrankingsBestCollegeAthletics%2CrankingsBestCollegesForBiology%2CrankingsBestCollegesForBusiness%2CrankingsBestCollegeFood%2CrankingsTopPartySchools%2CrankingsBestCollegeLocations%2CrankingsBestCollegeProfessors%2CrankingsBestStudentLife%2CrankingsHardestToGetIn%2CrankingsBestStudentAthletes%2CrankingsHottestGuys%2CrankingsBestCatholicColleges%2CrankingsCollegesThatAcceptTheCommonApp%2CrankingsBestCollegesForChemistry%2CrankingsBestCollegesForCommunications%2CrankingsBestCollegesForComputerScience%2CrankingsBestCollegesForEconomics%2CrankingsBestCollegesForHistory%2CrankingsBestCollegesForNursing%2CrankingsMostLiberalColleges%2CrankingsMostConservativeColleges%2CrankingsBestCollegesForArt%2CrankingsBestCollegesForEngineering%2CrankingsBestGreekLifeColleges%2CrankingsCollegesWithNoApplicationFee%2CrankingsBestCollegesForDesign%2CrankingsBestTestOptionalColleges%2CrankingsBestCollegesForPhysics%2Ctheprincetonreviewbest382colleges2018%2Ccollegesthatchangelivesfourthedition%2CgraduationRate%2CmedianEarningsSixYrsAfterEntry%2CmedianEarningsTenYrsAfterEntry`;
      const response = await fetch(url1);
      const data = await response.json();
      const res = data.colleges;
      setColleges(res);
    }
  }, []);
  return (
    <div className="w-full h-full">
      {colleges && (
        <div className="">
          {colleges.map((college) => (
            <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
              <div className="flex items-start justify-between">
                <div className="m-6 h-full w-full hidden lg:block shadow-lg relative">
                  <div className=" h-full dark:bg-gray-700">
                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                        Hello!, {user.name}
                      </h1>
                      <h2 className="text-md text-gray-400">
                        Here we have your data so you can start studying in{" "}
                        {college.name}.
                      </h2>
                      <div className="m-6 bg-white dark:bg-gray-800 ">
                        <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">Apply to {college.name}</span>
                            <span className="block text-indigo-500">
                              It&#x27;s today or never.
                            </span>
                          </h2>
                          <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className=" inline-flex rounded-md shadow">
                              <a
                                href={"https://" + college.applicationWebsite}
                                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                              >
                                Get started
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                        <div className="w-full md:w-6/12">
                          <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                            <a href="#" className="w-full h-full block">
                              <div className="flex items-center justify-between px-4 py-6 space-x-4">
                                <div className="flex items-center">
                                  <span className="rounded-full relative p-5 bg-yellow-100">
                                    <svg
                                      width="40"
                                      fill="currentColor"
                                      height="40"
                                      className="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                      viewBox="0 0 1792 1792"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                    </svg>
                                  </span>
                                  <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                                    Total debt payed
                                  </p>
                                </div>
                                <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                                  $0
                                  <span className="text-xs text-gray-400">
                                    /${college.netPriceByIncomeLevel110001Plus}
                                  </span>
                                </div>
                              </div>
                              <div className="w-full h-3 bg-gray-100">
                                <div className="w-0 h-full text-center text-xs text-white bg-green-400"></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center w-full md:w-1/2 space-x-4">
                          <div className="w-1/2">
                            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                              <p className="text-2xl text-black dark:text-white font-bold">
                                {quotes}
                              </p>
                              <p className="text-gray-400 text-sm">
                                missing quotas
                              </p>
                            </div>
                          </div>
                          <div className="w-1/2">
                            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                              <p className="text-2xl text-black dark:text-white font-bold">
                                ${debt}
                              </p>
                              <p className="text-gray-400 text-sm">
                                monthly contribution
                              </p>
                              <span className="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
                                <svg
                                  width="40"
                                  fill="currentColor"
                                  height="40"
                                  className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                  viewBox="0 0 1792 1792"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="m-6 mb-6 text-2xl text-black dark:text-white font-bold">
                        Next pays
                      </span>
                      <LineChart
                        width={1000}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                      >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                      </LineChart>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          ))}
        </div>
      )}
    </div>
  );
}
