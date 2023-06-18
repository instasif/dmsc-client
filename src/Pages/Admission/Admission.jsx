import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Admission = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const stName = form.stName.value;
    const email = form.email.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const session = form.session.value;
    const localGuardian = form.localGuardian.value;
    const relationWdLocalGuardian = form.rltWdLocalGuardian.value;
    const localGuardianPhone = form.localGuardianPhone.value;
    const permanentAdress = form.permanentAdress.value;
    const presentAdress = form.presentAdress.value;
    const classAdmission = form.classAdmission.value;
    const previousSchoolName = form.previousSchoolName.value;
    const religion = form.religion.value;
    const birthDate = form.birthDate.value;
    const parentsPhone = form.parentsPhone.value;
    const img = form.img.files[0];

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_API_KEY_imgbb
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbb) => {
        const admission = {
          student: stName,
          email,
          fathersName: fatherName,
          mothersName: motherName,
          localGuardian,
          relationWdLocalGuardian,
          localGuardianPhone,
          permanentAdress,
          presentAdress,
          classAdmission,
          session,
          previousSchoolName,
          religion,
          birthDate,
          parentsPhone,
          img: imgbb.data.display_url,
        };
        console.log(admission);

        fetch("http://localhost:5000/admission", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(admission),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("We will let you know throw email very soon.");
              form.reset();
              navigate("/");
            }
          });
      });
  };
  return (
    <div className="mx-5">
      <h1 className="text-3xl font-bold ms-8 mt-5">
        <span className="text-blue-500">Admission</span> Form:
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid grid-cols-6 gap-6 w-[90%] ms-8"
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="stName"
            className="block text-lg font-medium text-gray-700"
          >
            Students Name
          </label>

          <input
            required
            type="text"
            id="stName"
            defaultValue={user?.displayName}
            name="stname"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="fathersName"
            className="block text-lg font-medium text-gray-700"
          >
            Fathers Name
          </label>

          <input
            required
            type="text"
            id="fathersName"
            name="fatherName"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="mothersName"
            className="block text-lg font-medium text-gray-700"
          >
            Mothers Name
          </label>

          <input
            required
            type="text"
            id="mothersName"
            name="motherName"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="localGuardian"
            className="block text-lg font-medium text-gray-700"
          >
            Local Guardian Name
          </label>

          <input
            required
            type="text"
            id="localGuardian"
            name="localGuardian"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="retlationshipWdLocalGuardian"
            className="block text-lg font-medium text-gray-700"
          >
            Relationship with local guardian
          </label>

          <input
            required
            type="text"
            id="retlationshipWdLocalGuardian"
            name="rltWdLocalGuardian"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="localGuardianPhone"
            className="block text-lg font-medium text-gray-700"
          >
            Local Guardians Phone
          </label>

          <input
            required
            type="tel"
            id="localGuardianPhone"
            name="localGuardianPhone"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="permanentAdress"
            className="block text-lg font-medium text-gray-700"
          >
            Permanent Address
          </label>

          <input
            required
            type="text"
            id="permanentAdress"
            name="permanentAdress"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="presentAdress"
            className="block text-lg font-medium text-gray-700"
          >
            Present Address
          </label>

          <input
            required
            type="text"
            id="presentAdress"
            name="presentAdress"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="classAdmission"
            className="block text-lg font-medium text-gray-700"
          >
            Class
          </label>

          <input
            required
            type="text"
            id="classAdmission"
            name="classAdmission"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="session"
            className="block text-lg font-medium text-gray-700"
          >
            Session
          </label>

          <input
            required
            type="text"
            id="session"
            name="session"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="previousSchoolName"
            className="block text-lg font-medium text-gray-700"
          >
            Previous School Name
          </label>

          <input
            required
            type="text"
            id="previousSchoolName"
            name="previousSchoolName"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="religion"
            className="block text-lg font-medium text-gray-700"
          >
            Religion
          </label>

          <input
            required
            type="text"
            id="religion"
            name="religion"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="birthDate"
            className="block text-lg font-medium text-gray-700"
          >
            Birth Date
          </label>

          <input
            required
            type="text"
            id="birthDate"
            name="birthDate"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="parentsPhone"
            className="block text-lg font-medium text-gray-700"
          >
            Fathers or Mothers Phone Number
          </label>

          <input
            required
            type="tel"
            id="parentsPhone"
            name="parentsPhone"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>

          <input
            required
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="img"
            className="block text-lg font-medium text-gray-700"
          >
            Students Photo
          </label>

          <input
            required
            type="file"
            id="img"
            name="img"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-500 mb-10">
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
