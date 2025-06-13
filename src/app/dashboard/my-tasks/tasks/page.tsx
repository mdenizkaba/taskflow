"use client";

import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import TaskCard from "@/components/task/task-card";
import Row from "@/components/task/task-row";
import { FC, useState } from "react";

export type Task = {
  date: string;
  priority: "High" | "Medium" | "Low" | null;
  title: string;
  avatars: string[];
  tags: string[];
  attachments: number;
  comments: number;
  status: Status;
};

export type Status = "Backlog" | "Today" | "In Progress" | "Completed" ;

const initialTasks: Task[] = [
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
  // {
  //   date: "11.06.2024",
  //   priority: "High",
  //   title: "Complete UI Mockups for Dashboard",
  //   avatars: ["/dashboard/avatar-1.jpg"],
  //   tags: ["Design"],
  //   attachments: 0,
  //   comments: 2,
  //   status: "Deneme",
  // },
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
  const [statusOrder, setStatusOrder] = useState<Status[]>(["Backlog", "Today", "In Progress", "Completed"]);
  const [columns, setColumns] = useState(() => {
    const statusMap: Record<Status, Task[]> = {
      Backlog: [],
      Today: [],
      "In Progress": [],
      Completed: [],
    };
    for (const task of initialTasks) {
      statusMap[task.status].push(task);
    }
    return statusMap;
  });

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;
    if (!destination) return;

    // Sütun sıralaması değişikliği
    if (type === "COLUMN") {
      const newStatusOrder = [...statusOrder];
      const [removed] = newStatusOrder.splice(source.index, 1);
      newStatusOrder.splice(destination.index, 0, removed);
      setStatusOrder(newStatusOrder);
      return;
    }

    // Kart sıralaması değişikliği
    const sourceCol = source.droppableId as Status;
    const destCol = destination.droppableId as Status;

    const sourceTasks = Array.from(columns[sourceCol]);
    const destTasks = Array.from(columns[destCol]);

    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceCol === destCol) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns((prev) => ({ ...prev, [sourceCol]: sourceTasks }));
    } else {
      movedTask.status = destCol;
      destTasks.splice(destination.index, 0, movedTask);
      setColumns((prev) => ({ ...prev, [sourceCol]: sourceTasks, [destCol]: destTasks }));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex w-[calc(((((100vw)-280px)-3rem)-(18px)))] h-[calc(100dvh-200px)] overflow-scroll pb-4"
          >
            {statusOrder.map((status, index) => (
              <Draggable key={status} draggableId={status} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="flex flex-col min-w-[300px]"
                  >
                    <Row
                      label={status}
                      badge={columns[status].length}
                      className={status === "Completed" ? "opacity-50" : ""}
                      {...(provided.dragHandleProps ? { dragHandleProps: provided.dragHandleProps } : {})}
                    >
                      <Droppable droppableId={status} type="CARD">
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="space-y-2 min-h-[60px]"
                          >
                            {columns[status].map((task, index) => (
                              <Draggable
                                key={`${status}-${index}`}
                                draggableId={`${status}-${index}`}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <TaskCard {...task} />
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </Row>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MyTasks;
