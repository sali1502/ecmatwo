"use strict";

// Variabler
const url = "https://webbutveckling.miun.se/files/ramschema_ht23.json";
const searchBarEl = document.getElementById('searchBar');
const codeEl = document.getElementById('code');
const courseNameEl = document.getElementById('courseName');
const progressionEl = document.getElementById('progression');

let courses = [];

window.onload = init;

async function init() {

    // Fetch-anrop
    try {
        const response = await fetch("url");
        courses = await response.json();

        // Händelsehanterare sorterar kurskod vid klick på rubrik
        codeEl.addEventListener('click', (e) => {
            let sortedCode = courses.sort((a, b) => (a.code > b.code) ? 1 : -1);

            displayCourses(sortedCode);
        });

        // Händelsehanterare sorterar kurskod omvänt vid dubbelklick på rubrik
        codeEl.addEventListener('dblclick', (e) => {
            let sortedCodeReverse = courses.sort((a, b) => (a.code > b.code) ? 1 : -1).reverse();

            displayCourses(sortedCodeReverse);
        });

        // Händelsehanterare sorterar kursnamn vid klick på rubrik
        courseNameEl.addEventListener('click', (e) => {
            let sortedCourseName = courses.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);

            displayCourses(sortedCourseName);
        });

        // Händelsehanterare sorterar kursnamn omvänt vid dubbelklick på rubrik
        courseNameEl.addEventListener('dblclick', (e) => {
            let sortedCourseNameReverse = courses.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1).reverse();

            displayCourses(sortedCourseNameReverse);
        });

        // Händelsehanterare som sorterar progression vid klick på rubrik
        progressionEl.addEventListener('click', (e) => {
            let sortedProgression = courses.sort((a, b) => (a.progression > b.progression) ? 1 : -1);

            displayCourses(sortedProgression);
        });

        // Händelsehanterare som sorterar progression omvänt vid dubbelklick på rubrik
        progressionEl.addEventListener('dblclick', (e) => {
            let sortedProgressionReverse = courses.sort((a, b) => (a.progression > b.progression) ? 1 : -1).reverse();

            displayCourses(sortedProgressionReverse);
        });

        // Händelsehanterare som filtrerar data vid input i sökruta
        searchBarEl.addEventListener('keyup', (e) => {
            const searchString = e.target.value;

            let filteredCourses = courses.filter((course) => {
                return course.coursename.toLowerCase().includes(searchString);
            });

            displayCourses(filteredCourses);
        });

        displayCourses(courses);

    } catch {

        document.getElementById("error").innerHTML = "<p>Något gick fel, prova igen senare!</p>";

    }

}

// Utskrift till DOM
const coursesEl = document.getElementById("courseList");

const displayCourses = (courses) => {
    const htmlString = courses
        .map((course) => {
            return `
        <tr>
            <td>${course.code}</td>
            <td>${course.coursename}</td>
            <td>${course.progression}</td>
        </tr>
        `;
        })
        .join('');
    coursesEl.innerHTML = htmlString;
};
















