import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ProblemIOCard from "@/components/ui/ProblemIOCard";
import CodeEditorWrapper from "@/components/ui/CodeEditorWrapper";
import FilterDropdown from "@/components/ui/FIlterDropdown";

const ProblemPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Output will appear here...");
  const [code, setCode] = useState(`function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}`);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">
      {/* Problem Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Two Sum</h1>
        <p className="text-slate-400 text-sm mt-1">
          Given an array of integers, return the indices of the two numbers that add up to a target.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT: DESCRIPTION + TEST CASES */}
        <div className="space-y-6">
          {/* DESCRIPTION */}
          <Card>
            <h2 className="text-sm font-semibold text-slate-100">Description</h2>
            <p className="text-sm text-slate-300 mt-3 leading-6">
              You are given an array <code>nums</code> and an integer <code>target</code>.
              Return the indices of the two numbers such that they add up to the target.
              <br /><br />
              You may assume that each input would have exactly one solution, and you may not
              use the same element twice.
            </p>
          </Card>

          {/* INPUT / OUTPUT */}
          <div className="grid grid-cols-2 gap-4">
            <ProblemIOCard
              label="Input"
              value={input}
              onChange={setInput}
              placeholder="Enter test input"
            />
            <ProblemIOCard
              label="Output"
              value={output}
              readOnly
            />
          </div>

          {/* RUN BUTTON */}
          <Button
            size="md"
            className="w-full"
            onClick={() => setOutput("✔ Code executed (mock output)")}
          >
            Run Code
          </Button>
        </div>


        {/* RIGHT: CODE EDITOR */}
        <div className="space-y-4">
          {/* Language Selector */}
          <div className="flex justify-end">
            <FilterDropdown label="JavaScript" />
          </div>

          <CodeEditorWrapper value={code} onChange={setCode} />

          <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
            Submit Solution
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
