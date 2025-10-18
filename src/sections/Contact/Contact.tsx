import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Contact.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "İsim alanı boş bırakılamaz.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı boş bırakılamaz.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta alanı boş bırakılamaz.";
      isValid = false;
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Lütfen geçerli bir e-posta formatı girin.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      console.log("Form Verisi Gönderildi (Simülasyon):", formData);

      setIsSubmitted(true);

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      console.log("Form doğrulaması başarısız.");
    }
  };

  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">İletişime Geçin</h2>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        {isSubmitted && (
          <div className="contact__success-message">
            Mesajınız başarıyla gönderildi!
          </div>
        )}

        <Input
          id="name"
          label="İsim"
          value={formData.name}
          onChange={handleChange}
          placeholder="Adınız Soyadınız"
          error={errors.name}
        />

        <Input
          id="email"
          label="E-posta"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ornek@eposta.com"
          error={errors.email}
        />

        <div className="input-group">
          <label htmlFor="message" className="input-group__label">
            Mesajınız
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı buraya yazın..."
            className={`input-group__input input-group__textarea ${
              errors.message ? "input-group__input--error" : ""
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `message-error` : undefined}
            rows={5}
          />
          {errors.message && (
            <span id="message-error" className="input-group__error-message">
              {errors.message}
            </span>
          )}
        </div>

        <Button type="submit" variant="primary">
          Gönder
        </Button>
      </form>
    </section>
  );
};

export default Contact;
