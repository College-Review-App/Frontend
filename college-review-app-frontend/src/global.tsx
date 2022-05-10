let colleges: JSON;

export const setColleges = (collegeList: JSON) => {
    console.log(collegeList)
    colleges = collegeList;
}

export const getColleges = () => {
    return colleges;
}