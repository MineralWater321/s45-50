import { Fragment } from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from "../data/coursesData";
import React from "react";

export default function Courses(){
    console.log(coursesData);
    console.log(coursesData[0]);
    return (
        <Fragment>
            <CourseCard courseProp={coursesData[0]} />
        </Fragment>
    )
}