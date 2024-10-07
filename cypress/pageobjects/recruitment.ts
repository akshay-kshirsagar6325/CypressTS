

const Recruitment = 'a[href$="/viewRecruitmentModule"]';



class recruitment
{

    getRecruitment()
    {
        return cy.get(Recruitment);
    }

}  
  
  export default recruitment;