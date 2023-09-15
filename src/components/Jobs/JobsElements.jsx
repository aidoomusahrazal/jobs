import styled from "styled-components";

export const JobsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
    box-sizing: border-box;

    .onMobile {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: none;
        margin: 16px;
    }

    .onMobile .showFilter, .onMobile .showPopular {
        width: 100%;
        padding: 16px 32px;
        box-sizing: border-box;
        border: 2px solid blue;
        border-radius: 8px;
        font-weight: bold;
        font-size: 17px;
        text-transform: capitalize;
        background-color: #fff;
        margin: 8px 0;
    }

    .upload {
        width: 100%;
        padding: 15px 10px;
        box-sizing: border-box;
        display: flex;
        border: 2px solid blue;
        border-radius: 8px;
        align-items: center;
    }

    .upload  .uploadIcon .icon {
        font-size: 2rem;
        color: blue;
    }

    .upload .inputs {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }

    .upload .inputs input[type="file"] {
        display: none;
    }

    .upload .inputs label {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
    }

    .upload .inputs p {
        margin: 0;
    }

    .jobs {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 32px;
    }

    .jobs .foundJobs {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: blue;
    }

    .availableJobs {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .availableJobs .job {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        box-shadow: 4px 4px 16px #c5c5c584;
        margin: 16px 0;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: #fff;
    }

    .availableJobs .job .jobDetails {
        width: 100%;
        height: fit-content;
        display: flex;
        padding: 20px 20px 0;
        box-sizing: border-box;
    }

    .availableJobs .job .jobDetails .companyLogo {
        width: 50px;
        height: 50px;
        border: 1px solid blue;
    }

    .availableJobs .job .jobDetails .companyLogo img {
        width: 100%;
        height: 100%;
    }

    .availableJobs .job .jobDetails .details {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding-left: 16px;
        box-sizing: border-box;
    }

    .availableJobs .job .jobDetails .details .jobTitle {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    .availableJobs .job .jobDetails .details .jobLocation {
        font-size: 17px;
        margin: 0;
    }

    .availableJobs .job  .otherDetails {
        margin: 4px 0px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0px 10px;
        box-sizing: border-box;
    }

    .availableJobs .job  .otherDetails .requirement {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .availableJobs .job  .otherDetails .requirement > p {
      margin: 0;
    }

    .availableJobs .job  .otherDetails .requirement .mainRequirement {
        font-weight: bold;
        font-size: 1.1rem;
    }

    .availableJobs .job .timePosted {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        padding: 8px 20px;
        box-sizing: border-box;
        background-color: #aaaaaaa1;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .availableJobs .job .timePosted p {
        margin: 0;
    }

    /* Mobile styling */

    @media screen and (max-width: 820px) {
        width: 100%;
    padding: 0px 7px;

    .onMobile {
        display: flex;
    }


    .availableJobs {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .availableJobs .job {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        box-shadow: 4px 4px 16px #c5c5c584;
        margin: 16px 0;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: #fff;
        border: 2px solid green;
    }

    .availableJobs .job .jobDetails {
        padding: 10px 10px 0;
    }


    .availableJobs .job .jobDetails .details {
        padding-left: 8px;
    }

    .availableJobs .job .jobDetails .details .jobTitle {
        font-size: 1.3rem;
    }

    .availableJobs .job .jobDetails .details .jobLocation {
        font-size: 14px;
    }

    .availableJobs .job  .otherDetails {
        padding: 0px 5px;
    }


    .availableJobs .job  .otherDetails .requirement .mainRequirement {
        font-weight: 700;
        font-size: 1rem;
    }

    .availableJobs .job .timePosted {
        padding: 4px 10px;
    }
    }
`