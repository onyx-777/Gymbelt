import SchedulerWrapper from "./components/schedule/_components/wrapper/schedular-wrapper";
import { SchedulerProvider } from "./providers/schedular-provider";

export default function Scheduler() {
  return (
    <SchedulerProvider weekStartsOn="monday">
      <SchedulerWrapper />
    </SchedulerProvider>
  );
}
