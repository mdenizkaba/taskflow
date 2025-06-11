import TaskCard from "@/components/task/task-card";
import Row from "@/components/task/task-row";
import { FC } from "react";

type Task = {
  date: string;
  priority: "High" | "Medium" | "Low" | null;
  title: string;
  avatars: string[];
  tags: string[];
  attachments: number;
  comments: number;
  status: "Backlog" | "Today" | "In Progress" | "Completed";
};

const tasks: Task[] = [
  {
    date: "11.06.2024",
    priority: "High",
    title: "Complete UI Mockups for Dashboard",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 2,
    status: "Backlog",
  },
  {
    date: "14.06.2024",
    priority: "Low",
    title: "Client Presentation Preparation",
    avatars: ["/dashboard/avatar-1.jpg","/dashboard/avatar-2.jpg","/dashboard/avatar-3.jpg"],
    tags: ["Design"],
    attachments: 3,
    comments: 4,
    status: "Backlog",
  },
  {
    date: "16.06.2024",
    priority: "Medium",
    title: "Fix Bugs in User Profile Feature",
    avatars: ["/dashboard/avatar-2.jpg","/dashboard/avatar-3.jpg"],
    tags: ["Development"],
    attachments: 0,
    comments: 2,
    status: "Backlog",
  },
  {
    date: "20.06.2024",
    priority: "Medium",
    title: "Implement Dark Mode (Fizia)",
    avatars: ["/dashboard/avatar-3.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 1,
    status: "Backlog",
  },
  {
    date: "20.06.2024",
    priority: "Low",
    title: "Update Security Protocols",
    avatars: ["/dashboard/avatar-3.jpg"],
    tags: ["Development"],
    attachments: 0,
    comments: 2,
    status: "Backlog",
  },
  {
    date: "14.06.2024",
    priority: "Low",
    title: "User Flow Mapping (Denza)",
    avatars: ["/dashboard/avatar-2.jpg"],
    tags: ["Design"],
    attachments: 3,
    comments: 4,
    status: "Today",
  },
  {
    date: "14.06.2024",
    priority: "Low",
    title: "Design Microinteractions",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 3,
    status: "Today",
  },
  {
    date: "11.06.2024",
    priority: "High",
    title: "Update Product Roadmap (Bitrix)",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 2,
    status: "Today",
  },
  {
    date: "14.06.2024",
    priority: "Low",
    title: "Design User Onboarding Flow",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 1,
    comments: 12,
    status: "In Progress",
  },
  {
    date: "16.06.2024",
    priority: "High",
    title: "Create Animated Transitions (Fucan)",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 2,
    comments: 26,
    status: "In Progress",
  },
  {
    date: "07.06.2024",
    priority: null,
    title: "Design Responsive Layouts (Fizia)",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 2,
    status: "Completed",
  },
  {
    date: "06.06.2024",
    priority: null,
    title: "Conduct Competitive Analysis",
    avatars: ["/dashboard/avatar-2.jpg"],
    tags: ["Design"],
    attachments: 3,
    comments: 4,
    status: "Completed",
  },
  {
    date: "03.06.2024",
    priority: null,
    title: "Develop User Personas (Fucan)",
    avatars: ["/dashboard/avatar-2.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 2,
    status: "Completed",
  },
  {
    date: "02.06.2024",
    priority: null,
    title: "Organize Design Assets",
    avatars: ["/dashboard/avatar-1.jpg"],
    tags: ["Design"],
    attachments: 0,
    comments: 5,
    status: "Completed",
  },
];

const MyTasks: FC = () => {
  const statusMap = tasks.reduce<Record<string, Task[]>>((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {});

  return (
    <div className="flex gap-6 w-[calc(((((100vw)-280px)-3rem)-(18px)))] h-[calc(100dvh-200px)] overflow-scroll pb-4">
      {Object.entries(statusMap).map(([status, tasks]) => (
        <Row key={status} label={status} badge={tasks.length} className={status==="Completed"?"opacity-50":""}>
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              date={task.date}
              priority={task.priority}
              title={task.title}
              avatars={task.avatars}
              tags={task.tags}
              attachments={task.attachments}
              comments={task.comments}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default MyTasks;
