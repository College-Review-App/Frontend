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
        this.reviewId = this.setOrNull(Object(applicantReview)["reviewId"]);
        this.collegeId = this.setOrNull(Object(applicantReview)["collegeId"]);
        this.reviewDate = this.setOrNull(Object(applicantReview)["reviewDate"]);
        this.city = this.setOrNull(Object(applicantReview)["city"]);
        this.state = this.setOrNull(Object(applicantReview)["state"]);
        this.country = this.setOrNull(Object(applicantReview)["country"]);
        this.race = this.setOrNull(Object(applicantReview)["race"]);
        this.gender = this.setOrNull(Object(applicantReview)["gender"]);
        this.familyIncome = this.setOrNull(Object(applicantReview)["familyIncome"]);
        this.highschool = this.setOrNull(Object(applicantReview)["highschool"]);
        this.GPA = this.setOrNull(Object(applicantReview)["gpa"]);
        this.SAT = this.setOrNull(Object(applicantReview)["sat"]);
        this.ACT = this.setOrNull(Object(applicantReview)["act"]);
        this.intendedMajor = this.setOrNull(Object(applicantReview)["intendedMajor"]);
        this.extracurriculars = this.setOrNull(Object(applicantReview)["extracurriculars"]);
        this.advice = this.setOrNull(Object(applicantReview)["advice"]);
        this.likes = this.setOrNull(Object(applicantReview)["likes"]);
        this.outcome = this.setOrNull(Object(applicantReview)["outcome"]);
        this.isVerified = this.setOrNull(Object(applicantReview)["isVerified"]);
    }

    private setOrNull(reviewField: any): any {
        return reviewField == null || reviewField == undefined ? null : reviewField
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