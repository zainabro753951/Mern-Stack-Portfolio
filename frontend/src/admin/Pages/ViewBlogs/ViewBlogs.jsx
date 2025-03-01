import React from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ViewBlogs = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.5vw] font-semibold  font-lexend_deca pb-3">
            View Blog
          </h1>
          <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
            Your educational journey is a key part of who you are and where
            you're headed. Here, you can view the milestones of your academic
            achievements, showcasing the degrees, institutions, and experiences
            that have shaped your knowledge and skills. Whether it’s your first
            degree or the latest qualification, each step is a building block
            towards your future success. Take a moment to reflect on the hard
            work, dedication, and passion that have fueled your learning path.
          </p>
        </div>
        <div className="py-10 px-5">
          <h2 className="text-2xl font-semibold font-lexend_deca">Blogs</h2>
          <div className="max-w-[100%]">
            <div class="relative">
              <div className="w-full grid lg:grid-cols-2 py-[3vw] lg:gap-[1.4vw] md:gap-[2.4vw] xs:gap-[3.8vw]">
                <div className="w-full lg:h-[25vw] md:h-[50vw]">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src="/imgs/projects/p4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3">
                    How to design a user-centric mobile application?
                  </h1>
                  <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center px-[5vw]">
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] font-semibold sm:text-[2.8vw] xs:text-[3vw] font-lexend_deca">
                    Author Name
                  </p>
                  <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                    Zain Abro
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] font-semibold sm:text-[2.8vw] xs:text-[3vw] font-lexend_deca">
                    Catagory
                  </p>
                  <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                    Blogging
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] font-semibold sm:text-[2.8vw] xs:text-[3vw] font-lexend_deca">
                    Publish Date
                  </p>
                  <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                    12-5-2025
                  </p>
                </div>
              </div>
              <div className="w-full py-[3vw]">
                <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  neque necessitatibus totam autem omnis deleniti fugiat, et
                  odit officiis exercitationem, soluta a delectus ipsam
                  voluptatibus quod sapiente, excepturi rerum doloribus magni
                  perferendis. In excepturi adipisci possimus eum corporis vel
                  ipsam, nisi modi. Eum corporis perspiciatis explicabo laborum
                  qui impedit! Modi ducimus dolores, molestias voluptatibus nam
                  aliquid temporibus distinctio neque fugit. Fugit in, maxime
                  deserunt saepe neque consequuntur doloribus similique, ea
                  magni repellendus cumque, assumenda nihil cupiditate vel
                  magnam aperiam facere debitis iure numquam optio beatae omnis
                  excepturi minus commodi! Impedit maiores ea velit excepturi
                  repellendus laudantium vero nam. Earum, repellendus quos. Cum,
                  quia aperiam omnis tenetur hic consectetur sit, corporis
                  minima odio commodi sequi in cumque labore recusandae est
                  laboriosam eum sed aliquid aspernatur. Quidem praesentium
                  omnis cum quod at magni ipsum voluptatibus! Itaque cupiditate
                  ipsam in odit a fugiat ad repudiandae odio ipsa porro, quo
                  exercitationem mollitia minima quasi?
                </p>
                <br />
                <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  neque necessitatibus totam autem omnis deleniti fugiat, et
                  odit officiis exercitationem, soluta a delectus ipsam
                  voluptatibus quod sapiente, excepturi rerum doloribus magni
                  perferendis. In excepturi adipisci possimus eum corporis vel
                  ipsam, nisi modi. Eum corporis perspiciatis explicabo laborum
                  qui impedit! Modi ducimus dolores, molestias voluptatibus nam
                  aliquid temporibus distinctio neque fugit. Fugit in, maxime
                  deserunt saepe neque consequuntur doloribus similique, ea
                  magni repellendus cumque, assumenda nihil cupiditate vel
                  magnam aperiam facere debitis iure numquam optio beatae omnis
                  excepturi minus commodi! Impedit maiores ea velit excepturi
                  repellendus laudantium vero nam. Earum, repellendus quos. Cum,
                  quia aperiam omnis tenetur hic consectetur sit, corporis
                  minima odio commodi sequi in cumque labore recusandae est
                  laboriosam eum sed aliquid aspernatur. Quidem praesentium
                  omnis cum quod at magni ipsum voluptatibus! Itaque cupiditate
                  ipsam in odit a fugiat ad repudiandae odio ipsa porro, quo
                  exercitationem mollitia minima quasi?
                </p>
                <br />
                <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  neque necessitatibus totam autem omnis deleniti fugiat, et
                  odit officiis exercitationem, soluta a delectus ipsam
                  voluptatibus quod sapiente, excepturi rerum doloribus magni
                  perferendis. In excepturi adipisci possimus eum corporis vel
                  ipsam, nisi modi. Eum corporis perspiciatis explicabo laborum
                  qui impedit! Modi ducimus dolores, molestias voluptatibus nam
                  aliquid temporibus distinctio neque fugit. Fugit in, maxime
                  deserunt saepe neque consequuntur doloribus similique, ea
                  magni repellendus cumque, assumenda nihil cupiditate vel
                  magnam aperiam facere debitis iure numquam optio beatae omnis
                  excepturi minus commodi! Impedit maiores ea velit excepturi
                  repellendus laudantium vero nam. Earum, repellendus quos. Cum,
                  quia aperiam omnis tenetur hic consectetur sit, corporis
                  minima odio commodi sequi in cumque labore recusandae est
                  laboriosam eum sed aliquid aspernatur. Quidem praesentium
                  omnis cum quod at magni ipsum voluptatibus! Itaque cupiditate
                  ipsam in odit a fugiat ad repudiandae odio ipsa porro, quo
                  exercitationem mollitia minima quasi?
                </p>
              </div>
              <div className="w-full grid lg:grid-cols-2 gap-[5vw]">
                <div className="flex flex-col gap-5">
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] font-semibold sm:text-[2.8vw] xs:text-[3vw] font-lexend_deca">
                    Tags
                  </p>
                  <div className="w-full flex flex-wrap gap-3 items-center">
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] font-semibold sm:text-[2.8vw] xs:text-[3vw] font-lexend_deca">
                    SEO Keywords
                  </p>
                  <div className="w-full flex flex-wrap gap-3 items-center">
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                    <div className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg">
                      Mern stack
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-[4vw] w-ful">
                <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3">
                  SEO Title
                </h1>
                <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
                  SEO Discription <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  neque necessitatibus totam autem omnis deleniti fugiat, et
                  odit officiis exercitationem, soluta a delectus ipsam
                  voluptatibus quod sapiente, excepturi rerum doloribus magni
                  perferendis. In excepturi adipisci possimus eum corporis vel
                  ipsam, nisi modi. Eum corporis perspiciatis explicabo laborum
                  qui impedit! Modi ducimus dolores, molestias voluptatibus nam
                  aliquid temporibus distinctio neque fugit. Fugit in, maxime
                  deserunt saepe neque consequuntur doloribus similique, ea
                  magni repellendus cumque, assumenda nihil cupiditate vel
                  magnam aperiam facere debitis iure numquam optio beatae omnis
                  excepturi minus commodi! Impedit maiores ea velit excepturi
                  repellendus laudantium vero nam. Earum, repellendus quos. Cum,
                  quia aperiam omnis tenetur hic consectetur sit, corporis
                  minima odio commodi sequi in cumque labore recusandae est
                  laboriosam eum sed aliquid aspernatur. Quidem praesentium
                  omnis cum quod at magni ipsum voluptatibus! Itaque cupiditate
                  ipsam in odit a fugiat ad repudiandae odio ipsa porro, quo
                  exercitationem mollitia minima quasi?
                </p>
              </div>
              <div>
                <p className="lg:text-[1.2vw] md:text-[2.2vw] font-semibold sm:text-[2.8vw] xs:text-[3vw] font-lexend_deca">
                  Customer comment this post!
                </p>
                <div className="py-[2vw] w-full flex items-center">
                  <Link
                    to={`/admin/editEducation`}
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[0.4vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/admin/editEducation`}
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[0.4vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogs;
