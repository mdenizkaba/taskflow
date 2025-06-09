import CirclePlusIcon from "@/components/icons/CirclePlusIcon";
import VerticalDots from "@/components/icons/VerticalDots";

const RowHeader = ({ label, badge }: { label: string; badge: number }) => {
  return (
    <div className="px-4 flex justify-between items-center">
      <div className="flex gap-2 justify-center">
        <div className="text-white font-medium text-base">{label}</div>
        {badge > 0 && (
          <div className="flex justify-center items-center rounded-lg bg-[#5B72EF]/15 px-2 text-xs">
            {badge}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer">
          <CirclePlusIcon />
        </div>
        <div className="cursor-pointer">
          <VerticalDots></VerticalDots>
        </div>
      </div>
    </div>
  );
};

const Row = ({
  children,
  label,
  badge = 0,
}: {
  children: React.ReactNode;
  label: string;
  badge?: number;
}) => {
  // Todo: genişlik buluğu alanın genişliğine ulaşıp ordan hesaplanmalı ve min-w ile sabitlenmeli
  return (
    <div className="min-w-[315px] w-[calc(((((100vw)-280px)-3rem)-(4.5rem+18px))/4)]">
      <RowHeader label={label} badge={badge} />
      <div className="rounded-2xl bg-[#12131B] mt-3 p-3 gap-3 flex flex-col">{children}</div>
    </div>
  );
};

export default function MyTasks() {
  return (
    <div className="flex gap-6 w-[calc(((((100vw)-280px)-3rem)-(18px)))] overflow-x-scroll pb-4">
      <Row label="Backlog" badge={5}>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
      </Row>
      <Row label="Today" badge={2}>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
      </Row>
      <Row label="In Progress" badge={3}>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
        <div className="w-full h-[150px] bg-slate-400 rounded-xl">
          asasas
        </div>
      </Row>
      <Row label="Completed" badge={4}>
        aaa
      </Row>
      <Row label="Completed" badge={5}>
        aaa
      </Row>
    </div>
  );
}
