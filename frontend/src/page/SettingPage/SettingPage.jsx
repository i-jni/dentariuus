
import StudentSetting from "../../components/editStudent/EditStudent";
import TextImage from "../../components/titleImage/TextImage";

const SettingPage = () => { 

    return (
        <>
            <TextImage text="Modifier le profile:" imageUrl="/images/illustrations/settings.svg"/>
            <StudentSetting />
            
        </>
    )



}

export default SettingPage;