"use client";

import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import useRedirect from "@/hooks/useUserRedirect";
import { useEffect, useState } from "react";
import TaskItem from "./Components/TaskItem/TaskItem";
import Filters from "./Components/Filters/Filters";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";
import { filteredTasks } from "@/utils/utilities";

export default function Home() {
  useRedirect("/login");

  const {
    logoutUser,
    user,
    handlerUserInput,
    userState,
    updateUser,
    allUsers,
    deleteUser,
  } = useUserContext();

  const {
    tasks,
    openModalForAdd,
    priority,
    setPriority,
  } = useTasks();

  const { name, bio } = user;

  const [isOpen, setIsOpen] = useState(false);

  const myToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setPriority("all");
  }, []);

  const allFilteredTasks = filteredTasks(tasks, priority);

  return (
    <main className="py-[2rem] mx-[10rem]">
      <header className="flex justify-between">
        <h1 className="text-[2rem] font-bold">
          Welcome <span className="text-red-600">{name}</span>
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={logoutUser}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </header>

      <section>
        <p className="text-[#999] text-[2rem]">{bio}</p>

        <button
          onClick={myToggle}
          className="px-4 py-2 bg-[#2ECC71] text-white rounded-md"
        >
          Update Bio
        </button>

        {isOpen && (
          <form className="mt-4 px-8 py-4 max-w-[520px] w-full rounded-md">
            <div className="flex flex-col">
              <label htmlFor="bio" className="mb-1 text-[#999]">
                Bio
              </label>
              <textarea
                name="bio"
                defaultValue={bio}
                className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
                onChange={(e) => handlerUserInput("bio")(e)}
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={(e) => updateUser(e, { bio: userState.bio })}
              className="mt-4 px-4 py-2  bg-blue-500 text-white rounded-md"
            >
              Update Bio
            </button>
          </form>
        )}
      </section>

      {/* All tasks */}
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Tasks</h2>
          <Filters />
        </div>

        <motion.div
          className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {allFilteredTasks.map((task, i) => (
            <TaskItem key={i} task={task} />
          ))}
          <motion.button
            className="h-[16rem] w-full py-2 rounded-md text-lg font-medium text-gray-500 border-dashed border-2 border-gray-400
            hover:bg-gray-300 hover:border-none transition duration-200 ease-in-out"
            onClick={openModalForAdd}
            variants={item}
          >
            Add New Task
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
