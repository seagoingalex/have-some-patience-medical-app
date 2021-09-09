Have Some Patients.io
A web application that helps patients schedule appointments with their doctors, and share intake information the doctor can then view in preparation for their appointment. A lightweight healthcare doctor/patient portal to showcase Ruby & Rails fundamentals.

!! Instructions !!
1. In your terminal, run 'rails s' to start up the backend server.
2. Type 'cd client' into another terminal followed by 'npm start' to run the front-end

Resources
Initial wireframes: https://excalidraw.com/#json=5295409333272576,94f9-MBlJ7eKOL9hVXjxSw
Entity relationship diagram (ERD): https://miro.com/app/board/o9J_l4--KrE=/
CRUD functionality details: https://docs.google.com/spreadsheets/d/1eZ4ccBd7d8wjUG2lmvNalbd8s2xM_-KLOVe82t8a72Q/edit?usp=sharing

Feature Highlights
- Sign in / Sign up functionality which leverages a polymorphic relationship structure between a user who is a doctor versus one who is a patient, altering the behavior and look of the site after login.
- A doctor can see their respective patients, and vice versa, from the 'My Patients/Doctors' tab, which calls a custom action in the users controller that details all patients/doctors they have ever had an appointment with.
- Upcoming appointments show scheduled sessions that a patient has booked vs those completed which display in "Appointment history". This is handled by a boolean data attribute 'appointment_complete' in the appointments table.
- Appointments that have yet to be marked completed can also be cancelled via a button on each card within the Upcoming Appointments tab.
- The schedule tab will only show up for users who are patients, and the selection dropdown on the following page will fetch all doctors that exist within the database. After selecting one and entering a time, the patient can schedule the appointment.
- After booking an appointment, both doctors and patients can select "Complete intake form" from the upcoming appointments tab to prep one another prior to and after their scheduled appointment.
- Additional tools used include serializations, exception handlers, BCrypt, validations, and styled components.

What is the basic story of the application?
This application provides a single site for doctors and patients to sign up and not only manage their appointments, but the doctor/patient conversation that happens outside the exam room. When scheduling an appointment, a patient can specify the time and date they desire and their doctor of preference. Once booked, the patient can then complete an intake form that their doctor can then review at their own convenience prior to the appointment. Once concluded, doctors can then provide their exam notes to be archived and reviewed from either the doctor's or patient's portal at any point in the future.

Core features of the MVP
- User stories: MVP
  - As an anonymous user, I can
    - View the login page
    - Log into the site
    - Sign up as a doctor OR a patient
  - As a patient, I can:
    - View my profile
    - View my appointment history ( what a doctor has not marked complete)
    - View my upcoming appointments
      - Review the chart my doctor completed and I originally filled out questionnaire/intake
      - View my doctors and their public profile information
    - Schedule an appointment with a doctor 
    - Patient can complete a questionnaire / form for the doctor to review prior to appointment
    - Cancel an appointment
  - As a doctor, I can:
    - Sign in w/ credentials
    - View my doctor profile
    - View my patients health profile information
    - “Complete” an appointment, either manually or once I have completed the patient chart
      - Edit / Update a chart for an appointment for a patient
    - View my upcoming appointments
    - View my appointment history
      - Review the chart doctor completed after meeting with the patient
- User stories: Stretch
  - As a patient, I can:
    - Find a doctor based on relevant criteria (specialty, preferences, location, etc.) prior to scheduling an appointment with them
    - Edit an intake form prior to the appointment
    - Confirm a doctor’s request to reschedule an appointment
    - Send a follow up question / comment to a Doctor after receiving my chart
    - Edit / Update my profile
  - As a doctor, I can:
    - Query through appointment/patient information based on filtered criteria (e.g. “How many patients with General Care appointments have I had?”)
    - Set my availability
    - Cancel an appointment
    - Request to reschedule an appointment
    - Edit my profile
    - Be notified automatically when a patient has cancelled an appointment
    - Notification functionality
    - Need to make sure that there is “confirmation attribution” 
    - Additional model for “Chart” for patient aka a collection of all their intakes
