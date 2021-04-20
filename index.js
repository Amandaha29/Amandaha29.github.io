"use strict";
(function() {
  window.addEventListener("load", init);

  /** Responds to click event to filter experiences based on skills selected */
  function init() {
    let allSkills = qsa("section#skill-tags button");
    for (let i = 0; i < allSkills.length; i++) {
      allSkills[i].addEventListener("click", toggleExperience);
    }
  }

  /** Shows experiences matching skills selected */
  function toggleExperience() {
    replaceSkillIcon();
    hideExps();
    this.classList.toggle("skill-remove");
    let skillsInclude = [];
    for (let i = 1; i < this.parentNode.children.length; i++) {
      let skillTag = this.parentNode.children[i];
      if (!skillTag.classList.value.includes("skill-remove")) {
        skillsInclude.push(skillTag.classList.value);
      }
    }
    for (let i = 0; i < skillsInclude.length; i++) {
      let skillName = skillsInclude[i];
      let skillTagsInExp = qsa("#all-exp ." + skillName);
      for (let j = 0; j < skillTagsInExp.length; j++) {
        let allExpWithSkill = skillTagsInExp[j].parentNode;
        allExpWithSkill.classList.remove("hidden");
      }
    }
  }

  /** Hides all experiences with skill tags */
  function hideExps() {
    let allExps = qsa("article#all-exp section");
    for (let i = 1; i < allExps.length - 1; i++) {
      let exp = allExps[i];
      exp.classList.add("hidden");
    }
  }

  /** Replaces blue skill icon with green version */
  function replaceSkillIcon() {
    let gIcon = gen("img");
    gIcon.src = "img/greencode.png";
    gIcon.alt = "code icon in green";
    gIcon.id = "skills-icon";
    let skillIcon = id("skills-icon");
    skillIcon.parentNode.replaceChild(gIcon, skillIcon);
  }

  /**
   * gets element by id
   * @param {string} id - name of id
   * @return {element} - element associated with id
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Selects all elements that match selector
   * @param {string} selector - selector type
   * @return {NodeList} - list of elements that match the specified group of selectors.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * creates element based on selector
   * @param {string} selector - tagName for element
   * @return {element} - element with specified tag name
   */
  function gen(selector) {
    return document.createElement(selector);
  }

})();