import { BracketsCurly } from "phosphor-react";
import { useEffect, useState } from "react";
import { ExtraSkillsArr } from "../../utils/extraSkills";

interface ExtraSkillsDTO {
  id: number;
  name: string;
}

export function ExtraSkills() {
  const [extraSkills, setExtraSkills] = useState<ExtraSkillsDTO[]>([]);

  useEffect(() => {
    setExtraSkills(ExtraSkillsArr);
  }, []);

  return (
    <>
      {extraSkills.map(({ id, name }) => (
        <div key={id} className="mb-[10px] flex items-center">
          <BracketsCurly size={18} className="text-[#FFB400]" />
          <span className="ml-[15px] text-[15px] text-[#767676]">{name}</span>
        </div>
      ))}
    </>
  );
}
