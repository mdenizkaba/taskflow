interface SmallTitleProps {
  label: string;
}

export default function SmallTitle ({ label }: SmallTitleProps) {
  return(
    <div className="flex gap-4 items-center">
      <div className="w-1 h-1 bg-[#ADBAFC] shadow-[0_0_2.3px_#6077F5,inset_0_0_0.5px_0.2px_#8497F9] rounded-full"></div>
      <div className="text-md font-medium text-[#C2CCFD] opacity-[42%]">{label}</div>
      <div className="w-1 h-1 bg-[#7685D4] shadow-[0_0_2.3px_#6077F5,inset_0_0_0.5px_0.2px_#8497F9] rounded-full"></div>
    </div>
  )
}