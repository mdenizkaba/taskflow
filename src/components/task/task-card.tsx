import clsx from "clsx";
import CalendarCheck from "../icons/CalendarCheck";
import PriorityBadge from "../PriorityBadge";
import ProfileImage from "../profile-image";
import Paperclip from "../icons/Paperclip";
import MessageIcon from "../icons/MessageIcon";

export default function TaskCard({
  date,
  priority,
  title,
  avatars,
  tags,
  attachments,
  comments,
}: {
  date: string;
  priority: string | null;
  title: string;
  avatars: string[];
  tags: string[];
  attachments: number;
  comments: number;
}) {
  return (
    <div
      className={clsx(
        "w-full border-[2px] border-[#222433] rounded-lg px-3 ",
        "bg-gradient-to-br from-[#31334F] from-0% via-[#1F2036] via-20% to-[#171A2E]"
      )}
    >
      <div className="flex justify-between items-center pt-2.5">
        <div className="flex items-center gap-0.5">
          <CalendarCheck className="text-[#93AD79] size-4" />
          <div className="text-[#777EA1] text-[12px]">{date}</div>
        </div>
        <PriorityBadge
          type={clsx(
            priority === "High" && "red",
            priority === "Medium" && "yellow",
            priority === "Low" && "green",
            priority === "Borderless" && "borderless"
          )}
        >
          {priority}
        </PriorityBadge>
      </div>
      <div className="text-white font-regular text-sm my-3 max-h-10 overflow-hidden">
        {title}
      </div>
      <div className="flex justify-between items-center pb-2.5">
        <div className="flex justify-start items-center gap-2 -mb-2.5 pb-2">
          <div className="flex items-center">
            {avatars.map((src, index) => (
              <div
                key={index}
                className={clsx(
                  "h-8 w-8 rounded-full border-2 border-[#12131B] flex items-center justify-center",
                  index > 0 && "-ml-3"
                )}
              >
                <ProfileImage src={src} alt={`User Avatar ${index + 1}`} />
              </div>
            ))}
          </div>
          {tags.map((tag, index) => (
            <PriorityBadge
              key={index}
              className={clsx("text-xs font-medium", index > 0 && "ml-2")}
            >
              {tag}
            </PriorityBadge>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-2.5">
          {attachments > 0 && (
            <div className="flex items-center gap-[2px]">
              <Paperclip className="text-[#40455C] size-4" />
              <div className="text-[#9CA2BD] text-[14px] font-medium">
                {attachments}
              </div>
            </div>
          )}
          {comments > 0 && (
            <div className="flex items-center gap-[2px]">
              <MessageIcon className="text-[#40455C] size-4" />
              <div className="text-[#9CA2BD] text-[14px] font-medium">
                {comments}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};