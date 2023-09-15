import styled from "styled-components"

export const FilterContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    .toggleFilter {
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    .filterHead {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    .filterTypes {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        margin: 8px 0;
    }

    .filterTypes .filterTypeHead {
        margin: 0;
        font-size: 1.1rem;
        font-weight: lighter;
        text-transform: uppercase;
    }

    .filterTypes .head {
        font-size: 1.1rem;
        margin: 0;
        text-transform: capitalize;
        color: blue;
        margin: 4px 0;
    }

    .filterTypes .filter {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
    }

    .filterTypes .filter .filterType {
        margin: 2px 0px;
        text-transform: capitalize;
        font-weight: 600;
    }

 
`