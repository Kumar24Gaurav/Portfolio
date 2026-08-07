
from app.core.metadata import METADATA


def get_link(query: str):

    query = query.lower().strip()

    links = METADATA["links"]

    for key, value in links.items():
        if key in query:
            return value

    projects = METADATA["projects"]

    for project_name in projects:
        if project_name in query:
            return projects[project_name]

    if "project" in query:
        return projects

    return None


def search_resume(resume, query: str):

    query = query.lower()

    if any(word in query for word in ["skill", "technology", "tech stack"]):
        return resume.skills

    if any(word in query for word in [
        "education",
        "study",
        "studies",
        "graduation",
        "graduate",
        "degree",
        "college",
        "university",
        "b.tech",
        "btech",
        "bachelor",
        "diploma",
        "polytechnic",
        "school",
        "10th",
        "12th"
    ]):
        return resume.education

    if "experience" in query:
        return resume.experience

    if any(word in query for word in ["certification", "certificate", "certifications"]):
        return resume.certifications

    if "project" in query:
        return resume.projects

    if "email" in query:
        return resume.contact.email

    if "phone" in query:
        return resume.contact.phone

    if "contact" in query:
        return resume.contact

    if any(word in query for word in ["summary", "about", "profile", "introduce"]):
        if resume.summary:
            return resume.summary

        return resume.model_dump()

    for project in resume.projects:
        if query in project.name.lower():
            return project

    return "Not found"

