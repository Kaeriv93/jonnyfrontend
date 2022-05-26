function Footer(props) {
    return(
      <div className="footer">
        <form>
          <label>First Name</label>
          <input type = 'text' id='fname' name ='firstname' placeholder="Your name.."/>
          <label>Last Name</label>
          <input type = 'text' id='lname' name='lastname' placeholder ='Your last name..'/>
          <label>Subject</label>
          <textarea id='subject' name='subject' placeholder="Write something.."/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
  
  export default Footer;