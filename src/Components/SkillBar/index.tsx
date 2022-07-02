import { useEffect, useState } from "react";
import { Skills } from "../../utils/skills";

interface SkillsDTO {
  name: string;
  percentage: string;
  color: string;
}

export function SkillBar() {
  const [skills, setSkills] = useState<SkillsDTO[]>([])
  
  useEffect(() => {
    setSkills(Skills)
  }, [])

  return (
    <>
      {skills.map(({ name, percentage, color }) => (
        <div className="mb-3">
          <div className="flex flex-row justify-between items-center mb-1">
            <p className="text-[#767676] text-base">{name}</p>
            <span className="text-[#767676] text-base">{percentage}</span>
          </div>
          <div className={`w-full h-[4px] rounded-[30px] border border-solid border-[#FFB400]`}>
            <div style={{width: `${percentage}`}}  className={`h-[2px] rounded-[30px] bg-[${color}]`} />
          </div>
        </div>
      ))}
    </>
  )
}