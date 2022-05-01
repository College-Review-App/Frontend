class college {
    private collegeId: number;
    private collegeName: String;
    private location: String;
    private image: String;
    private acceptanceRate: number;
    private ranking: number;
        
    constructor(college: Object) {
        this.collegeId = Object(college)["collegeId"];
        this.collegeName = Object(college)["collegeName"];
        this.location = Object(college)["location"];
        this.image = Object(college)["image"];
        this.acceptanceRate = Object(college)["acceptanceRate"];
        this.ranking = Object(college)["ranking"];
    }

    public get getCollegeId(): number {
        return this.collegeId;
    }

    public get getCollegeName(): String {
        return this.collegeName;
    }

    public get getLocation(): String {
        return this.location;
    }

    public get getImage(): String {
        return this.image;
    }

    public get getAcceptanceRate(): number {
        return this.acceptanceRate;
    }

    public get getRanking(): number {
        return this.ranking;
    }

}

export default college