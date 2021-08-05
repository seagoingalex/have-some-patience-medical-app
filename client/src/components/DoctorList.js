import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import React, { useState } from "react";
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

function DoctorList({ user }) {
    const [doctors, setDoctors] = useState([])

    const classes = useStyles();
    const xsNum = 6;
    const smNum = 2;

    useEffect(() => {
        fetch(`/users/${user.id}/doctors`).then((r) => {
            if (r.ok) {
                // r.json().then((patients) => console.log(patients))
                r.json().then((doctors) => setDoctors(doctors))
            }
        })
    }, [])
    
    return (
        <>
        <h1>This is your doctor list, {user.role.first_name}!</h1>
        <div className="flex-container">
            <div className={classes.root}>
                <Grid container spacing={3}>

                    {doctors.map(doctor => <ProfileCard
                        user={user}
                        key={doctor.user.id}
                        firstName={doctor.first_name}
                        lastName={doctor.last_name}
                        phoneNumber={doctor.phone_number}
                        city={doctor.city}
                        specialty={doctor.specialty}
                    />)}

                </Grid>
            </div>    
        </div>
        </>
    )

}

export default DoctorList;