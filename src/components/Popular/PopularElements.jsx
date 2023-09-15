import styled from "styled-components";

export const PopularContainer = styled.div`
     width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    .subscribe {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
    }

    .popularHead {
        margin: 0;
        font-size: 1.4rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    .popularHead span {
        color: blue;
    }

    .subscribe .emailCard {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 15px;
        box-sizing: border-box;
        margin-top: 16px;
        box-shadow: 4px 4px 16px #dddddd;
    }

    .subscribe .emailCard  label {
        color: blue;
    }

    .subscribe .emailCard input {
        padding: 5px;
        box-sizing: border-box;
        border: none;
        border-bottom: 2px solid grey;
        background-color: transparent;
    }

    .subscribe .emailCard input:active, .subscribe .emailCard input:focus {
        outline: none;
    }

    .subscribe .interested {
        padding: 16px 32px;
        border: 2px solid blue;
        border-radius: 4px;
        width: 100%;
        font-size: 17px;
        font-weight: bold;
        text-transform: capitalize;
        color: blue;
        background-color: #fff;
        transition: all .5s ease-in-out;
        margin-top: 16px;
    }

    .subscribe .interested:hover {
        background-color: blue;
        color: #fff;
        transition: all .5s ease-in-out;
    }

    .subscribe .noInterest {
        padding: 0;
        margin: 4px 0px 0px;
        background-color: transparent;
        border: none;
    }

    .popular {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        margin-top: 16px;
    }

    .popular > .popularHead {
        margin-bottom: 16px;
    }

    .popular .jobs {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
    }

    .popular .jobs .job {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        margin: 8px 0;
    }

    .popular .jobs .job  .logo {
        width: 50px;
        height: 50px;
    }

    .popular .jobs .job  .logo img {
        width: 100%;
        height: 100%;
    }

    .popular .jobs .job .txt .companyName{
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    .popular .jobs .job .txt .availableJobs {
        margin: 0;
        color: grey;
    }
`