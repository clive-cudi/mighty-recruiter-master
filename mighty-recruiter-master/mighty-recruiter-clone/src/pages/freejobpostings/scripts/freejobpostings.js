(function(){
    const oj_exp_wrapper = document.getElementById('oj-exp-wrapper');

    const oj_exp_data = [
        {
            title: 'Learning to craft a well-written free job posting may feel daunting, but it’s a critical skill for hiring managers and recruiters.',
            description: 'In today’s competitive hiring landscape, if you want top talent, you can’t settle for anything less. A poorly crafted free job posting will do your organization more harm than you may think. Luckily, MightyRecruiter offers free optimized job description templates for hundreds of job titles — accessible both here and inside our recruiting software.',
        },
        {
            title: 'While knowing how to create a great job posting is a critical part of hiring success, it’s only one piece of the puzzle.',
            description: 'Great recruiters understand that they also need to make the most of their time and get the most bang for their buck. And that’s where MightyRecruiter can help',
        },
        {
            title: 'We can help you write a strong free job posting and distribute it to the sites that count.',
            description: 'Once the resumes start rolling in, MightyRecruiter gives you the tools you need to manage, review, contact, and hire your applicants with minimal effort. Start sourcing and recruiting for free today!',
        },
    ]

    function makeOj(title, desription){
        let isMin = true;

        function toggleMin(){
            if (isMin) {
                isMin = false;
            } else {
                isMin = true;
            }
        }

        const oj_exp_data_markup_template = `
        <div class="oj-wrapper" onClick="${toggleMin()}">
            <div class="oj-title">
                <div class="oj-exp-icon"></div>
                <div class="oj-exp-txt">
                    <h1>${title}</h1>
                </div>
            </div>
            <div class="oj-exp-description" style="display: ${isMin ? `none` : `flex`}">
                <p>${desription}</p>
            </div>
        </div>`

        return oj_exp_data_markup_template
    }

    oj_exp_data.forEach((exp_data)=> {
        oj_exp_wrapper.innerHTML += makeOj(exp_data.title, exp_data.description);
    })

})();