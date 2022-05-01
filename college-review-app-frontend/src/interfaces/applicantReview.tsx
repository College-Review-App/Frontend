class applicantReview {
    private reviewId: number;
    private collegeId: number;
    private reviewDate: Date;
    private city: String;
    private state: String;
    private country: String;
    private race: String;
    private gender: number;
    private familyIncome: number;
    private highschool: String;
    private GPA: number;
    private SAT: number;
    private ACT: number;
    private intendedMajor: String;
    private extracurriculars: String;
    private advice: String;
    private likes: number;
    private outcome: number;
    private isVerified: Boolean;
        
    constructor(applicantReview: Object) {
        this.reviewId = Object(applicantReview)["reviewId"];
        this.collegeId = Object(applicantReview)["collegeId"];
        this.reviewDate = Object(applicantReview)["reviewDate"];
        this.city = Object(applicantReview)["city"];
        this.state = Object(applicantReview)["state"];
        this.country = Object(applicantReview)["country"];
        this.race = Object(applicantReview)["race"];
        this.gender = Object(applicantReview)["gender"];
        this.familyIncome = Object(applicantReview)["familyIncome"];
        this.highschool = Object(applicantReview)["highschool"];
        this.GPA = Object(applicantReview)["GPA"];
        this.SAT = Object(applicantReview)["SAT"];
        this.ACT = Object(applicantReview)["ACT"];
        this.intendedMajor = Object(applicantReview)["intendedMajor"];
        this.extracurriculars = Object(applicantReview)["extracurriculars"];
        this.advice = Object(applicantReview)["advice"];
        this.likes = Object(applicantReview)["likes"];
        this.outcome = Object(applicantReview)["outcome"];
        this.isVerified = Object(applicantReview)["isVerified"];
    }

    public get getReviewId(): number {
        return this.reviewId;
    }

    public get getCollegeId(): number {
        return this.collegeId;
    }

    public get getReviewDate(): Date {
        return this.reviewDate;
    }

    public get getCity(): String {
        return this.city;
    }

    public get getState(): String {
        return this.state;
    }

    public get getCountry(): String {
        return this.country;
    }

    public get getRace(): String {
        return this.race;
    }

    public get getGender(): number {
        return this.gender;
    }

    public get getFamilyIncome(): number {
        return this.familyIncome;
    }

    public get getHighschool(): String {
        return this.highschool;
    }

    public get getGPA(): number {
        return this.GPA;
    }

    public get getSAT(): number {
        return this.SAT;
    }

    public get getACT(): number {
        return this.ACT;
    }

    public get getIntendedMajor(): String {
        return this.intendedMajor;
    }

    public get getExtracurriculars(): String {
        return this.extracurriculars;
    }

    public get getAdvice(): String {
        return this.advice;
    }

    public get getLikes(): number {
        return this.likes;
    }

    public get getOutcome(): number {
        return this.outcome;
    }

    public get getIsVerified(): Boolean {
        return this.isVerified;
    }

}

export default applicantReview