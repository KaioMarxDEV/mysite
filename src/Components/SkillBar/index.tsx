import { useEffect, useState } from "react";
import { Skills } from "../../utils/skills";

interface SkillsDTO {
  id: number;
  name: string;
  percentage: string;
  color: string;
}

export function SkillBar() {
  const [skills, setSkills] = useState<SkillsDTO[]>([]);

  useEffect(() => {
    setSkills(Skills);
  }, []);

  return (
    <>
      {skills.map(({ id, name, percentage, color }) => (
        <div key={id} className="mb-3">
          <div className="mb-1 flex flex-row items-center justify-between">
            <p className="text-base text-[#767676]">{name}</p>
            <span className="text-base text-[#767676]">{percentage}</span>
          </div>
          <div
            className={`h-[4px] w-full rounded-[30px] border border-solid border-[#FFB400]`}
          >
            <div
              style={{ width: `${percentage}` }}
              className={`h-[2px] rounded-[30px] bg-[${color}]`}
            />
          </div>
        </div>
      ))}
    </>
  );
}
