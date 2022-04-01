// import axios from "axios";


const JobListings = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         jobs: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get("http://localhost:8080/jobs/")
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({
    //                 jobs: res.data
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    // renderJobs() {
    //     return this.state.jobs.map((job) => {
    //         return (
    //             <div key={job._id}>
    //                 <h2>{job.title}</h2>
    //                 <h4>{job.shortDescription}</h4>
    //                 <li>
    //                     <ul>{job.workType}</ul>
    //                     <ul>{job.jobType}</ul>
    //                     <ul>{job.company}</ul>
    //                     <ul>{job.salary}</ul>
    //                     <ul>{job.location}</ul>
    //                 </li>
    //                 <p>{job.updatedAt.substring(0, 10)}</p>
    //             </div>
    //         )
    //     })
    // }

        return (
            <div className="container">
                <h1>Job Listings</h1>
                <div>
                    {/* {this.renderJobs()} */}
                </div>
            </div>
        )
}

export default JobListings