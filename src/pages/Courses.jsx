import React from "react";
import Layout from "../components/Layout";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[80px]">
          <h2 className="text-center text-4xl font-bold text-white m-[2rem]">
            Our Courses
          </h2>

          
            <div className=" flex justify-center">
            <TextField
              placeholder="Search Name, Location, etc"
              className="bg-white w-[50%] mx-auto rounded-lg"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="End">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            </div>
       

       <CourseCard />
        </div>
      </Layout>
    </div>
  );
};

export default Courses;
