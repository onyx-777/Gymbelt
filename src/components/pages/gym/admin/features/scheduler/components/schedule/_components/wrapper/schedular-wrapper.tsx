import React from "react";
import SchedulerView from "../view/schedular-view";
import { Main } from "@/components/pages/gym/admin/components/layout/main";

export default function SchedulerWrapper() {
  return (
    <div className="w-full">
      <Main>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          <SchedulerView />
        </div>
      </Main>
    </div>
  );
}
